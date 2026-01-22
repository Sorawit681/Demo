// components/Layout/Sidebar.tsx
'use client'

import React from 'react';
import { Box, VStack, HStack, Text, Icon, Button, Flex } from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';
import { MdDashboard, MdCalendarToday } from 'react-icons/md';


export const Sidebar = () => {
  return (
    <Box
      as="nav"
      w="260px"
      h="100vh"
      bg="white"
      borderRight="1px"
      borderColor="gray.100"
      pos="fixed"
      left={0}
      top={0}
      py={8}
      px={4}
      boxShadow="sm"
      zIndex="sticky"
    >
      <VStack spacing={10} align="stretch">
        
        {/* Logo */}
        <HStack spacing={3} px={4}>
           <Flex
             bgGradient="linear(to-r, blue.500, purple.500)"
             p={2}
             borderRadius="lg"
             color="white"
             align="center"
             justify="center"
           >
             <Icon as={MdDashboard} boxSize={6} />
           </Flex>
           <Box>
             <Text fontWeight="bold" fontSize="lg" lineHeight="1">Dashboard</Text>
             <Text fontSize="xs" color="gray.500">Finance App</Text>
           </Box>
        </HStack>

        {/* Menu Items */}
        <VStack spacing={2} align="stretch">
            
            <Button
                variant="ghost"
                justifyContent="flex-start"
                leftIcon={<FaWallet />} 
                color="purple.600"
                bg="purple.50"
                _hover={{ bg: 'purple.100' }}
                fontWeight="semibold"
                size="lg"
            >
                รายรับ & รายจ่าย
            </Button>

            <Button
                variant="ghost"
                justifyContent="flex-start"
                leftIcon={<MdCalendarToday />}
                color="gray.500"
                _hover={{ color: 'purple.600', bg: 'gray.50' }}
                fontWeight="medium"
                size="lg"
            >
                ระบบจองอุปกรณ์
            </Button>

        </VStack>
      </VStack>
    </Box>
  );
};