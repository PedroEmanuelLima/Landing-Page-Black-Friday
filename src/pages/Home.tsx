import React, { useState } from 'react';
import { useEffect } from 'react';
import { ProductFrame } from '../components/ProductFrame';
import {productsList} from '../config';
import { ProductType } from '../types';
import './styles.css';
import youtube from '../assents/img/youtube.svg'
import insta from '../assents/img/insta.svg'
import face from '../assents/img/face.svg'

export const Home = () => {

    const [product, setProduct] = useState<ProductType[]>([]);
    
    useEffect(() => {
       setProduct(productsList);
    }, [])

    return(
        <div className="container">
            <header className="header">
                <div className="list-header">
                    <h1 className="title-header">Decora Nerd</h1>
                    <div className="options-header">
                        <a href="#">Produtos</a>
                        <a href="#">Promoções</a>
                        <a href="#">Mais Informações</a>
                    </div>
                </div>
                <div className="more-header">
                    <img
                        src="http://3.bp.blogspot.com/-k0MANeoOAm4/Vp0HspNlgbI/AAAAAAAABkw/7UKAdXlJaYw/s1600/best_animes.png"
                        alt='Imagem Exposição Pintura de Animes'
                    />
                    <main className="informations-header">
                        <h2 className="title-informations-header">Transforme sua vida, sinta-se a vontade em sua casa com seu estilo!</h2>
                        <p className="text-informations-header">
                            Nossas peças são todas de qualidade e com garantia. Além de presarmos por sua segurança, oferecemos os melhores meios de pagamento!
                        </p>
                        <form className="form-header">
                            <div className="group-header">
                                <label htmlFor="name">Nome</label>
                                <input type="text" name="name" placeholder="Digite seu nome"/>
                            </div>
                            <div className="group-header">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Melhor Email"/>
                            </div>
                            <button className="btn-form-header">Enviar</button>
                        </form>
                    </main>
                </div>
            </header>

            <div className="collection">
                <h2 className="title-collection">Promoções Decora Nerd</h2>
                <div className="body-collection">
                    {product.map(prod => <ProductFrame
                        imageModule={prod.imageModule}
                        priceModule={prod.priceModule}
                        titleModule={prod.titleModule}
                    />)}
                </div>
            </div>

            <footer className="footer">
                <h3 className="footer-title">Mais Informações</h3>
                <div>
                    <h1 className="name-more">Decora Nerd</h1>
                    <div className="image-footer">
                        <img src={youtube} alt="youtube" />
                        <img src={insta} alt="instagram" />
                        <img src={face} alt="facebook" />
                    </div>
                </div>
            </footer>
        </div>
    )
}