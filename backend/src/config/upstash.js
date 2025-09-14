import{Ratelimit} from "@upstash/ratelimit"
import{Redis} from "@upstash/redis"

import dotenv from "dotenv"

dotenv.config();

///create ratelimiter that allos10 requests pe20 minutes
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5,"10 s")
});

export default ratelimit