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
import { UserModule } from './user/user.module';
import { GraphQLDateTime } from 'graphql-iso-date';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
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
      resolvers: { DateTime: GraphQLDateTime },
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {
}
