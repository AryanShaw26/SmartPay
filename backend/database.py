from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

DATABASE_URL = (
   "postgresql://neondb_owner:npg_w8ksPx6GYCZN@ep-lively-flower-aohgulzq.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
)

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True
)
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()