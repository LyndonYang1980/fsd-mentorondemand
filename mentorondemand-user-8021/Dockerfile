FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 8021
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-user.jar
COPY ./wait-for-it.sh /wait-for-it.sh
RUN sh -c 'chmod 777 /wait-for-it.sh'
RUN sed -i 's/\r//g' /wait-for-it.sh
RUN apk add bash
ENTRYPOINT ["bash", "/wait-for-it.sh", "mysqlhost:3306", "--", "java", "-jar", "/mentorondemand-user.jar"]
