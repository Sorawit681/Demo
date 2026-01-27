import React from 'react';
import { Box, VStack, HStack, Text, Icon, Button, Flex } from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';
import { MdDashboard, MdCalendarToday, MdShowChart  } from 'react-icons/md';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

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
            <Text fontWeight="bold" fontSize="lg" lineHeight="1">
              Dashboard
            </Text>
            <Text fontSize="xs" color="gray.500">
              Finance App
            </Text>
          </Box>
        </HStack>

        {/* Menu Items */}
        <VStack spacing={2} align="stretch">
          
          <Button
            as={NextLink}
            href="/"
            variant="ghost"
            justifyContent="flex-start"
            leftIcon={<FaWallet />}
            w="100%"
            bg={isActive('/') ? 'purple.50' : 'transparent'}
            color={isActive('/') ? 'purple.600' : 'gray.500'}
            _hover={{ bg: 'purple.100' }}
          >
            รายรับ & รายจ่าย
          </Button>

          <Button
            as={NextLink}
            href="/booking"
            variant="ghost"
            justifyContent="flex-start"
            leftIcon={<MdCalendarToday />}
            w="100%"
            bg={isActive('/booking') ? 'purple.50' : 'transparent'}
            color={isActive('/booking') ? 'purple.600' : 'gray.500'}
            _hover={{ bg: 'purple.100' }}
          >
            ระบบจองอุปกรณ์
          </Button>

          <Button
            as={NextLink}
            href="/chart"
            variant="ghost"
            justifyContent="flex-start"
            leftIcon={<MdShowChart />}
            w="100%"
            bg={isActive('/chart') ? 'purple.50' : 'transparent'}
            color={isActive('/chart') ? 'purple.600' : 'gray.500'}
            _hover={{ bg: 'purple.100' }}
          >
            กราฟ
          </Button>

        </VStack>
      </VStack>
    </Box>
  );
};
