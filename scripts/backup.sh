#!/bin/bash

set -e

DB_FILE="./prisma/dev.db"
BACKUP_REPO="git@github.com:yousef-yaghoubi/backup-sqlite.git"
BACKUP_DIR="/tmp/sqlite-backup"

echo "🔄 Starting backup..."

# کلون کردن ریپو
rm -rf $BACKUP_DIR
git clone $BACKUP_REPO $BACKUP_DIR

# کپی فایل دیتابیس
cp $DB_FILE $BACKUP_DIR/dev.db

# کامیت و پوش
cd $BACKUP_DIR
git config "yousef-yaghoubi"
git config "yousef1307y@gmail.com"
git add dev.db
git commit -m "Backup on $(date)"
git push origin main

echo "✅ Backup complete!"
