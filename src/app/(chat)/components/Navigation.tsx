'use client';

import {
    AnswerOffIcon,
    AnswerOnIcon,
    ConsultingOffIcon,
    ConsultingOnIcon,
    FirstTalkOffIcon,
    FirstTalkOnIcon,
    ProfileOffIcon,
    ProfileOnIcon,
} from '@/assets';
import { Flex, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const path = usePathname();

    const isAnswerPage = path === '/' || path.startsWith('/answer');
    const isFirstTalkPage = path.startsWith('/first_talk');
    const isConsultingPage = path.startsWith('/consulting');
    const isProfilePage = path.startsWith('/profile');

    const handleAlert = () => {
        alert('준비 중입니다. 잠시만 기다려주세요! :)');
    };

    return (
        <Flex maxW="420px" zIndex="100" p="6px 24px 21px" bg="white" w="100%" justify="space-between">
            <Link href="/answer">{isAnswerPage ? <AnswerOnIcon /> : <AnswerOffIcon />}</Link>
            <IconButton
                onClick={handleAlert}
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                aria-label="navigation button"
            >
                {isFirstTalkPage ? <FirstTalkOnIcon /> : <FirstTalkOffIcon />}
            </IconButton>
            <IconButton
                onClick={handleAlert}
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                aria-label="navigation button"
            >
                {isConsultingPage ? <ConsultingOnIcon /> : <ConsultingOffIcon />}
            </IconButton>
            <Link href="/profile">{isProfilePage ? <ProfileOnIcon /> : <ProfileOffIcon />}</Link>
        </Flex>
    );
}
