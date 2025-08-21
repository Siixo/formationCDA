#!/bin/bash

BACKUP_DIR="/home/siixo/Documents/tp_linux/Backup"
LOGS_DIR="/home/siixo/Documents/tp_linux/Logs"
ARCHIVE="$BACKUP_DIR/backup_logs.tar.gz"

if [ ! -d "$BACKUP_DIR" ]; then
  mkdir -p "$BACKUP_DIR"
fi

tar -czvf "$ARCHIVE" "$LOGS_DIR"

date >> "$LOGS_DIR/surveillance.log"
