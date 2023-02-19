import { JSXElementConstructor, ReactElement, ReactFragment, ReactNode, ReactPortal } from "react";

const TopBlueBanner = ({children}: {children: ReactNode}) => {
    return (
        <section className="container-fluid bg-blue-100 p-6 p-md-16">
        <div className="container white text-center">
         {children}
        </div>
      </section>
    )
};

export default TopBlueBanner;