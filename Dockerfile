FROM node:lts as dependencies
WORKDIR /docs
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /docs
COPY . .
COPY --from=dependencies /docs/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /docs
ENV NODE_ENV production

COPY --from=builder /docs/public ./public
COPY --from=builder /docs/package.json ./package.json
COPY --from=builder /docs/.next ./.next
COPY --from=builder /docs/node_modules ./node_modules

EXPOSE 8080
CMD ["npm", "start"]