import './MovieListContainer.css';
import Table from '../../molecules/Table';
import Text from '../../atoms/Text';
import { TableProps } from '../../molecules/Table/TableType';

const MovieListContainer = ({ movieListToDisplay, tableHeaders, getImageInfo, handleClick }:TableProps) => {
  return (
    <div className='movieList-container'>
        <Text text='Available Movies' type='heading' color='#000000'/>
        <Table 
          movieListToDisplay={movieListToDisplay}
          tableHeaders={tableHeaders} 
          getImageInfo={getImageInfo}
          handleClick={handleClick}
        />
    </div>
  )
}

export default MovieListContainer