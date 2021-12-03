FROM python:3.8.12-slim

WORKDIR /app
RUN pip install -U pip setuptools wheel
COPY requirements.txt .
RUN pip install -r requirements.txt

EXPOSE 8000
