"use client"
import Image from "next/image";
import Avatar from "../../../public/noproduct.jpg"
import "./productHome.css"
import { Button } from "react-bootstrap";

const ProductHome = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="producthome  ">
                        <Image src={Avatar} width="auto" height="auto" className="border-bottom mb-2 " />
                        <div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, reprehenderit.</div>
                            <Button variant="primary">İncele</Button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="producthome  ">
                        <Image src={Avatar} width="auto" height="auto" className="border-bottom mb-2 " />
                        <div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, reprehenderit.</div>
                            <Button variant="primary">İncele</Button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="producthome  ">
                        <Image src={Avatar} width="auto" height="auto" className="border-bottom mb-2 " />
                        <div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, reprehenderit.</div>
                            <Button variant="primary">İncele</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductHome