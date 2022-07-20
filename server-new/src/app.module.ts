import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloDriver,
  ApolloDriverConfig,
} from '@nestjs/apollo';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Role } from './auth/dto/signup-input';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      /*resolvers: {
        Role: {
          ADMIN: Role.ADMIN,
          INFLUENCER: Role.INFLUENCER,
          AGENCIE: Role.AGENCIE,
        },
      },*/
      driver: ApolloDriver,
      sortSchema: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(
        process.cwd(),
        'src/types/schema.gql',
      ),
      // typePaths: ['./**/*.gql'],
      definitions: {
        path: join(
          process.cwd(),
          'src/types/schema.ts',
        ),
        outputAs: 'class',
      },
      debug: true,
      introspection: true,
      playground: true,
      cors: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
