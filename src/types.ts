/**
 * Types Schemas MongoDB
 */
enum Situation {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending"
}

interface BaseDate {
  createdAt: Date;
  updatedAt?: Date;
}

interface BaseId {
  id: string;
}

export interface BaseUser {
  name: string;
  nickname: string;
  slug: string;
  email: string;
  password: string;
  picture: string;
  situation: Situation;
}

export interface User extends BaseUser, BaseDate, BaseId {}
