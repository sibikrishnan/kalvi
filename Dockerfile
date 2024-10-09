# Use a base image with Node.js installed
FROM node:18

# Update package list and install CA certificates
RUN apt-get update && apt-get install -y ca-certificates

# Copy the custom root certificate
COPY ./ZscalerRootCertificate-2048-SHA256.crt /usr/local/share/ca-certificates/

# Update the CA certificates (process the new .crt)
RUN update-ca-certificates

# Set NODE_EXTRA_CA_CERTS environment variable
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/ZscalerRootCertificate-2048-SHA256.crt

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
