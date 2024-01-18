import { MikroORM, EntitySchema, BigIntType } from "@mikro-orm/core";
import { defineConfig } from "@mikro-orm/sqlite";

export class UserEntity {
  id!: string;
}

export const UserEntitySchema = new EntitySchema({
  class: UserEntity,
  tableName: "user",
  properties: {
    id: { primary: true, type: new BigIntType("string") },
  },
});

async function main() {
  const orm = await MikroORM.init(
    defineConfig({
      dbName: ":memory:",
      entities: [UserEntitySchema],
      debug: false,
    }),
  );

  await orm.schema.createSchema();

  const em = orm.em.fork();
  const user = em.create(UserEntity, {});

  await em.persistAndFlush(user);

  console.log(user);

  await orm.close();
}

main();
