import React from 'react'
import Header from './Header';

function Personalized() {
   
      const personalizedGiftsData = [
        {
          title: 'Mugs',
          price: '245',
          link: '/personalised-gifts/mugs',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persomug.jpg?w=385',
        },
        {
          title: 'Cushion',
          price: '349',
          link: '/personalised-gifts/cushions',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persocushion.jpg?w=385',
        },
        {
          title: 'Photo Frames',
          price: '349',
          link: '/personalised-gifts/photo-frames',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persoframe.jpg?w=385',
        },
        {
          title: 'Lamps',
          price: '649',
          link: '/personalised-gifts/lamps',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/perolamp.jpg?w=385',
        },
          {
          title: 'Mugs',
          price: '245',
          link: '/personalised-gifts/mugs',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persomug.jpg?w=385',
        },
        {
          title: 'Cushion',
          price: '349',
          link: '/personalised-gifts/cushions',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persocushion.jpg?w=385',
        },
        {
          title: 'Photo Frames',
          price: '349',
          link: '/personalised-gifts/photo-frames',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persoframe.jpg?w=385',
        },
        {
          title: 'Lamps',
          price: '649',
          link: '/personalised-gifts/lamps',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/perolamp.jpg?w=385',
        },
        
       
      ];
    
    
  return (
  
    <>
      <Header />
      <div>
        <div className="col l12 s12 m12" style={{ padding: '0', marginBottom: '25px', margin: '0 auto' }}>
          <div className="col l8 s8 desktop-left-title text-lg-dark">Personalized Gifts</div>
          <a style={{ color: 'white' }} href="/personalised-gifts">
            <div className="col l4 s4 view_all">VIEW ALL</div>
          </a>
        </div>
        <div className="row rowapd catEventHomeWithTitle" style={{ margin: '0 auto', marginBottom: '100px' }}>
          {personalizedGiftsData.map((gift) => (
            <div className="col-3" key={gift.title}>
              <div className="card" style={{ borderRadius: '14px', boxShadow: 'none', overflow: 'hidden', margin: '0', backgroundColor: '#FFFFFF!important' }}>
                <a className="center-align" href={gift.link}>
                  <img alt={gift.title} widgettype="personalized category" className="card-img-top" src={gift.imageUrl} style={{ width: '100%', height: '100%' }} />
                  <div className="card-body" style={{ padding: '17px 5px 13px' }}>
                    <div className="col-10 truncate" style={{ paddingRight: '0', textAlign: 'left', color: '#404040', lineHeight: '19px',marginBottom:'20px' }}>
                      <h5 className="card-title" style={{ fontSize: '17px', fontWeight: 'bold' }}>{gift.title}</h5>
                      <p className="card-text" style={{ fontSize: '13px', margin: '0' }}>Starting From</p>
                      <p className="card-text" style={{ fontSize: '13px', margin: '0', fontWeight: 'bold' }}>
                        ₹ {gift.price}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="row rowapd catEventHomeWithTitle" style={{ margin: '0 auto', marginBottom: '20px' }}>
          {/* Add items for the second row here */}
        </div>
      </div>
    </>
  )
}

export default Personalized