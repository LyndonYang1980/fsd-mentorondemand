package com.fsd.mod.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.entities.Payment;
import com.fsd.mod.entities.Training;
import com.fsd.mod.feignclient.MentorClientService;
import com.fsd.mod.feignclient.PaymentClientService;

@Service
public class TrainingProgressScheduler {

	@Autowired
	MentorClientService mentorClientService;

	@Autowired
	TrainingService trainingService;

	@Autowired
	PaymentClientService paymentClientService;

	@Scheduled(cron = "0 0 1 * * ?")
	public void calcTrainingProgress() {
		
		System.out.println("Training scheduler agent to run...");
		String status = "In progress";
		List<Training> trainings = this.trainingService.getTrainingsByStatus(status);

		for (Training training : trainings) {

			Payment payment = null;
			double fee = training.getFee();
			Date startDate = training.getStartDate();
			Date endDate = training.getEndDate();
			Date todayDate = this.getToday();
			Double progress = this.formatDouble(this.calcProgress(startDate, endDate, todayDate));

			training.setProgress(progress);

			if ((progress - 0.25 >= 0 || progress - 0.25 <= 0.01) || (progress - 0.5 >= 0 || progress - 0.5 <= 0.01)
					|| (progress - 0.75 >= 0 || progress - 0.75 <= 0.01) || (progress - 1 >= 0 || progress - 1 <= 0.01)) {

				double payedFee = fee * progress;
				payment = paymentClientService.getPaymentByTrainingId(training.getTrainingId());
				if (payment == null) {
					payment = new Payment();
					Mentor mentor = mentorClientService.getMentor(training.getMentorId());
					payment.setMentor(mentor);
					payment.setTraining(training);
				}
				payment.setAmount(payedFee);
				payment.setPayDate(todayDate);
			}

			if (payment != null) {
				paymentClientService.savePayment(payment);
			}
		}

	}

	private Double calcProgress(Date startDate, Date endDate, Date todayDate) {

		Double percentage = 0.0;
		double daysToToday = this.getDistanceTime(startDate, todayDate);
		double totalDays = this.getDistanceTime(startDate, endDate);

		if (daysToToday > 0) {
			percentage = new BigDecimal(daysToToday / totalDays).doubleValue();
		}

		return percentage;
	}

	/**
	 * @return
	 */
	private Date getToday() {
		Calendar calendar = Calendar.getInstance();
		return calendar.getTime();
	}

	/**
	 * @param d
	 * @return
	 */
	private double formatDouble(double d) {
		BigDecimal bd = new BigDecimal(d).setScale(2, RoundingMode.DOWN);
		return bd.doubleValue();
	}

	/**
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	private double getDistanceTime(Date startDate, Date endDate) {
		double days = 0;
		double time1 = startDate.getTime();
		double time2 = endDate.getTime();

		double diff = time2 - time1;
		days = diff / (24 * 60 * 60 * 1000);
		return days;
	}
}
