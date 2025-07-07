const { migrateTaskCounts } = require('../dist/utils/utils');

async function runMigration() {
  try {
    console.log('Starting taskCount migration...');
    await migrateTaskCounts();
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration(); 