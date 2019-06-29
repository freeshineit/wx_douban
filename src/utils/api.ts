import Request from './request'

export interface IParams {
  start?: number | string
  count?: number
}
/**
 * Top250
 */
export const top250Api = (param?: IParams) => {
  return Request.get(`/v2/movie/top250`, param)
}

/**
 * 北美票房榜
 */
export const USBoxApi = (param?: IParams) => {
  return Request.get(`/v2/movie/us_box`, param)
}

/**
 * 口碑榜 (每周视频)
 */
export const weeklyApi = (param?: IParams) => {
  return Request.get(`/v2/movie/weekly`, param)
}

/**
 * 新片榜
 */
export const newMoviesApi = (param?: IParams) => {
  return Request.get(`/v2/movie/new_movies`, param)
}

/**
 * 即将上映
 */
export const comingSoonApi = (param?: IParams) => {
  return Request.get(`/v2/movie/coming_soon`, param)
}

/**
 * 正在热映
 */
export const inTheatersApi = (param?: IParams) => {
  return Request.get(`/v2/movie/in_theaters`, param)
}
