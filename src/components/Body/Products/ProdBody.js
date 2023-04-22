import { Box } from '@mui/material';
import * as React from 'react';
import ProdFilters from './Filters/ProdFilters';
import Catalogue from './Catalogue/Catalogue';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCatalogue, setFilteredItems } from '../../../services/catalogueSlice';

const ProdBody = () => {
    const dispatch = useDispatch();
    const catalogue = useSelector((state) => state.catalogue.catalogue);
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        if (!products) return;
        dispatch(setCatalogue(products[0].all_products));
        dispatch(setFilteredItems(catalogue));
    }, [dispatch, products, catalogue]);

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 10,
                    mt: 8,
                }}
            >
                <ProdFilters />
                <Box
                    sx={{
                        flex: 1,
                        flexShrink: 0,
                    }}
                >
                    <Catalogue />
                </Box>
            </Box>
        </Box>
    );
};

export default ProdBody;
