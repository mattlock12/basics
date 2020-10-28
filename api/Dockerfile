FROM python:3-slim
RUN apt update && apt install vim -y

WORKDIR /app
COPY requirements.txt .

RUN pip install --upgrade -r requirements.txt

COPY . .
