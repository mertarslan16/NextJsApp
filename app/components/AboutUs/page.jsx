import { Image } from "react-bootstrap"
import './aboutUs.css'

const AboutUs = () => {
  return (
    <div className="container mt-4 d-flex flex-column justify-center ">
      <div className="row">
        <div className="col-6">
          <Image
            fluid
            className=""
            src="https://images.pexels.com/photos/19121814/pexels-photo-19121814/free-photo-of-deniz-kadin-su-model.jpeg"
            width={390}
            alt="Image Two"
          />
        </div>
        <div className="col-6  d-flex flex-column mt-4">
          <h3>Hakkımızda</h3>
          <span>Biz Kimiz?</span>
          <p>Sizi burada görmekten mutluluk duyuyoruz! [Şirket İsmi], tutkuyla başladığımız ve her adımda müşteri memnuniyetini hedeflediğimiz bir e-ticaret platformudur. [Yıl]’den beri, misyonumuz kaliteli ürünleri, mükemmel hizmetle birleştirerek siz değerli müşterilerimize en iyi alışveriş deneyimini sunmaktır.</p>
          <span>Vizyonumuz</span>
          <p>Vizyonumuz, teknolojiyi, yenilikçiliği ve müşteri odaklılığı bir araya getirerek herkesin hayatını kolaylaştıran bir alışveriş deneyimi sağlamaktır. Sizlerin talepleri ve beklentileri doğrultusunda sürekli gelişen bir platform olmayı hedefliyoruz.</p>
          <span>Değerlerimiz</span>
          <p>  Müşteri memnuniyeti bizim için en üst önceliktir. Kalite, dürüstlük ve güvenilirlik değerlerimizin temelidir. Her adımda şeffaflıkla hareket ederken, sadece ürünlerimizle değil, aynı zamanda sunduğumuz hizmetle de öne çıkmayı amaçlıyoruz.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs