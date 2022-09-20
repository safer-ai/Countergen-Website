# Build frontend app
FROM node:16-alpine3.11
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/. .
RUN npm run build

# Package into Python app
FROM python:3.7
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN python -m spacy download en
COPY . . 
# Copy built npm package
COPY --from=0 /app/build /app/frontend/build
CMD ["python3", "app.py"]  