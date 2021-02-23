import React from `react`;
import MediaCard from './MediaCard';
import image1 from '..images/photo.jpeg';
import image2 from '../images/johnsnow.jpg';
import image3 from '../images/juegodetronos.jpg';

class MediaList extends React.Component {
    render() {
        return (
          <section className="section-people">
            <ul className="section-cardslist">
              <li>Me</li>
              <li>John Snow</li>
              <li>Tyrion Lannister</li>
            </ul>
          </section>
        );
      }
    

  }


export default MediaList;