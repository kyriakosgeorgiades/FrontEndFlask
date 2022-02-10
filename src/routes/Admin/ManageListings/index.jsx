import { Box, Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import Header from '../../../components/Header';
import "./style.scss";

export default function ManageListings() {
   
  return (
      <>
        <Header title="Manage Lisitngs" />
        <Box py="5em" m="0 auto" maxWidth="80%" h="100vh">
            <Table size='lg'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Brand</Th>
                        <Th>Price</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Toyota</Td>
                        <Td>Venza</Td>
                        <Td>£2,500</Td>
                    </Tr>
                    <Tr>
                        <Td>Toyota</Td>
                        <Td>Venza</Td>
                        <Td>£2,500</Td>
                    </Tr>
                    <Tr>
                        <Td>Toyota</Td>
                        <Td>Venza</Td>
                        <Td>£2,500</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Brand</Th>
                        <Th>Price</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </Box>
      </>
  );
}
