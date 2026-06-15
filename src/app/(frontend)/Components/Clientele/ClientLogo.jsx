import React from 'react';

const ClientLogo = ({ src, alt }) => (
    <img src={src} alt={alt} loading="lazy" />
);

export default ClientLogo;