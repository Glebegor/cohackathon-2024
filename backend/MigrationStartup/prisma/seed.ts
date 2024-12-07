import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Vytvoření rolí
  const youngRole = await prisma.role.create({
    data: { name: 'Admin' },
  })

  const adultRole = await prisma.role.create({
    data: { name: 'User' },
  })

  const adminRole = await prisma.role.create({
    data: { name: 'User' },
  })

  const superAdminRole = await prisma.role.create({
    data: { name: 'User' },
  })

  // Vytvoření ChildHouse
  const childHouse = await prisma.childHouse.create({
    data: {
      name: 'Happy Children\'s Home',
      description: 'A safe place for children.',
      address: '1234 Elm St, Springfield',
      phone: '+1234567890',
      email: 'contact@happychildren.org',
    },
  })

  const childHouse2 = await prisma.childHouse.create({
    data: {
      name: 'Happy Children\'s Home',
      description: 'A safe place for children.',
      address: '1234 Elm St, Springfield',
      phone: '+1234567890',
      email: 'contact@happychildren.org',
    },
  })

  // Vytvoření uživatelů
  const user1 = await prisma.user.create({
    data: {
      childhouse_id: childHouse.id,
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      password_hash: 'hashed_password_1', // Pozor: Zde by mělo být skutečné hašování hesla
      activated: true,
      role_id: adminRole.id,
    },
  })

  const user2 = await prisma.user.create({
    data: {
      childhouse_id: childHouse2.id,
      name: 'Jane',
      surname: 'Doe',
      email: 'jane.doe@example.com',
      password_hash: 'hashed_password_2', // Pozor: Zde by mělo být skutečné hašování hesla
      activated: true,
      role_id: youngRole.id,
    },
  })

  // Vytvoření uživatelského profilu pro Users
  await prisma.userProfile.create({
    data: {
      user_id: user1.id,
      description: 'A passionate social worker.',
      interests: 'Helping children, Community work',
      note: 'Looking forward to making a positive impact.',
      profile_picture: 'profile1.jpg',
      back_story: 'Grew up in a small town, always wanted to help others.',
    },
  })

  await prisma.userProfile.create({
    data: {
      user_id: user2.id,
      description: 'A passionate social worker.',
      interests: 'Helping children, Community work',
      note: 'Looking forward to making a positive impact.',
      profile_picture: 'profile1.jpg',
      back_story: 'Grew up in a small town, always wanted to help others.',
    },
  })

  // Vytvoření deníku pro Users
  await prisma.diary.create({
    data: {
      user_id: user1.id,
      emotion: 'Happy',
      note: 'Had a productive day at work!',
      shared: false,
    },
  })

  await prisma.diary.create({
    data: {
      user_id: user2.id,
      emotion: 'Happy',
      note: 'Had a productive day at work!',
      shared: false,
    },
  })

  console.log('Seed data inserted successfully!')
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
