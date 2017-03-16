# Dashboard

## Installation

You will need:

- JDK 8
- node/npm

Install libraries:

1. `./gradlew build`
1. `cd src/main/resources/assets`
1. `npm install`

## Running

1. `./run.sh`
1. Open another process/terminal
1. `cd src/main/resources/assets`
1. `./node_modules/.bin/webpack --watch`

NOTE: Automatic hotloading for static assets [doesn't work if you're using IntelliJ](http://docs.spring.io/spring-boot/docs/current/reference/html/howto-hotswapping.html). Hit
`CMD+F8` when you want the server to reload.

## Testing

- `./gradlew clean test`
- `./gradlew clean test -D verboseTests`