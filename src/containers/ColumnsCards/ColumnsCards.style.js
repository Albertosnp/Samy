import styled from 'styled-components';

const ColumnsCardsStyled = styled.section`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
*/
margin-top: 10px;
  margin-left: 5%;
  margin-right: 5%; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px ;
  justify-items: center;
  


  .columnsCards{
   
  }
`;

export default ColumnsCardsStyled;
