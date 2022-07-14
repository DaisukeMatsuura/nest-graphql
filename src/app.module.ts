import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './components/posts/posts.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: path.join(process.cwd(), 'src/generated/graphql/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
    }),
    PostsModule, // これ
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
