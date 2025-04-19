#!/bin/bash

# تنظیم مسیر دیتابیس و URL ریپو
DB_FILE="./prisma/dev.db"
BACKUP_REPO="https://raw.githubusercontent.com/yousef-yaghoubi/backup-sqlite/main/dev.db"

# چک کردن اینکه آیا فایل دیتابیس وجود دارد یا نه
if [ ! -f "$DB_FILE" ]; then
  echo "⏳ Restoring DB from backup..."
  mkdir -p ./prisma
  curl -o $DB_FILE $BACKUP_REPO
  echo "✅ Restore complete!"
else
  echo "ℹ️ DB already exists, skipping restore."
fi
