import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin:
      process.env.NODE_ENV == 'development'
        ? process.env.FRONTEND_DEV_URL
        : process.env.FRONTEND_PRD_URL,
    credentials: true,
  })
  app.use((req, res, next) => {
    if (req.headers.origin) {
      res.header('Access-Control-Allow-Origin', req.headers.origin)
    }
    next()
  })
  await app.listen(process.env.PORT)
}
bootstrap()
