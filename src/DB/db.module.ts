import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
require("dotenv").config({ path: "./config/dev.env" });

const dburi = process.env.MONGODB_URL;

@Module({
  imports: [
    MongooseModule.forRoot(dburi),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
