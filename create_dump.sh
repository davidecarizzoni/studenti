#!/bin/bash
docker exec mysql /usr/bin/mysqldump -u user --password=password studentdb > ./db/backup.sql