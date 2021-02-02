FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 8001
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-mentor.jar
COPY ./wait-for-it.sh /wait-for-it.sh
RUN sh -c 'chmod 777 /wait-for-it.sh'
RUN apk add bash
ENTRYPOINT ["bash", "/wait-for-it.sh", "userhost:8021", "--", "java", "-jar", "/mentorondemand-mentor.jar"]