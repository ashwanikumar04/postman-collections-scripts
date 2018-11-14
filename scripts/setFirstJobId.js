var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("first_job", jsonData[0].id);