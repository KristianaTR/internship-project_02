import { YourMovieListProps } from '../Data/yourMovieListType';

export interface UserListProps {
  name: string;
  surname: string;
  email: string;
  password: string;
  profileImg: string;
  active: boolean;
  rentedMovies: YourMovieListProps[];
}
