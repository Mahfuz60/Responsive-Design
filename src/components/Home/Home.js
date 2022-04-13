import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-1'>
          <div className='header-tittle'>
            <h1>header</h1>
            <div className='tittle-img'>
              <img
                src='https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
                alt=''
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod eos error optio modi nam illum rerum temporibus qui, dolore
              perspiciatis eligendi, assumenda consectetur expedita impedit ipsam veniam? Aliquid aut voluptas consequatur iure, praesentium dolore
              error quisquam est maiores, pariatur modi dolorum magni minus repellendus cum cumque harum. Dolore, omnis.
            </p>
          </div>
        </div>
        <div>
          <div className='col-2'>
            <div className='header-subTittle'>
              <h3>Sub Tittle</h3>
              <div className='subTittle-img'>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt='' />
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit tempora vero eveniet nam officiis dolor ullam debitis, quisquam
                minus. Eius, obcaecati. Molestiae debitis, dolore amet corrupti, inventore rem exercitationem, at et cum natus eligendi delectus ea
                doloremque aut id cupiditate sunt. Officiis pariatur voluptatibus voluptatum nostrum facere nisi soluta tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
