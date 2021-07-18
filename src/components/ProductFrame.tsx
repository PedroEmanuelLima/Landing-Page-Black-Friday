import React from 'react';
import './styles.css';
import { ProductType } from '../types';

export const  ProductFrame = (props: ProductType) => {



    return(
        <div className="card">
            <div className="card-img">
                <img src={props.imageModule.imagePathList[0]} alt="Image Product" />
            </div>
            <div>
                <p className="img-description">{props.titleModule.subject}.</p>
                <p className="img-price"><s>{props.priceModule.formatedPrice}</s>{props.priceModule.formatedActivityPrice} -{props.priceModule.discount}%</p>
            </div>
        </div>
    )
}