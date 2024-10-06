# Use a base image with Node.js installed
FROM node:18

# Update package list and install CA certificates
RUN apt-get update && apt-get install -y ca-certificates

# Copy the custom root certificate
COPY ./ZscalerRootCertificate-2048-SHA256.crt /usr/local/share/ca-certificates/
COPY ./ZscalerRootCertificate-2048-SHA256.pem /usr/local/share/ca-certificates/

ARG NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ZscalerRootCertificate-2048-SHA256.pem

# Update the CA certificates
RUN update-ca-certificates

# Verify the certificates were added
RUN ls -al /etc/ca-certificates

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json from the source code directory
COPY ./src/backend/package.json ./

# Install dependencies
RUN npm install --loglevel verbose

# Copy the rest of the application code
COPY . ./

# Expose the port your app listens on
EXPOSE 5000

# Command to start the application
CMD ["npm", "start"]
