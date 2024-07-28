import { Box, Text } from '@chakra-ui/react';

export default function Page() {
    return (
        <Box as="main" p="24px">
            <Text>
                본 약관은 썸BTI(이하 “회사“)가 제공하는 연애 코칭 서비스와 관련하여, 사용자 및 사용자와 연애 상대방의
                개인정보를 제3자에게 제공하는 경우에 대한 동의 내용을 규정합니다.
                <br />
                <br />
                제1조 (개인정보 제3자 제공 목적)
                <br />
                회사는 사용자와 연애 상대방의 구체적인 정보와 상황을 바탕으로 맞춤형 연애 코칭 서비스를 제공하기 위해,
                하이퍼클로바X(이하 “제3자“)에게 다음과 같은 정보를 제공할 수 있습니다: 사용자 및 연애 상대방 정보: 이름,
                성별, MBTI, 생년월일, 직업, 형제 관계, 관심사, 취미, 연애 경험 관계 정보: 상대방과의 관계, 만남 히스토리
                (만남 계기, 알고 지낸 기간, 만남 횟수, 만남 빈도, 연락 패턴)
                <br />
                <br />
                제2조 (제공되는 개인정보 항목)
                <br />
                제3자에게 제공되는 정보는 다음과 같습니다: 사용자 및 연애 상대방의 개인정보 (이름, 성별, MBTI, 생년월일,
                직업 등) 사용자와 연애 상대방 간의 관계 및 관련 정보 (관계 상태, 만남 히스토리 등) 그 밖의 사용자가
                추가적으로 서비스 사용 시에 기입한 본인과 상대방의 상세 정보
                <br />
                <br />
                제3조 (제3자의 개인정보 이용 목적)
                <br />
                제3자는 제공받은 개인정보를 다음의 목적으로 이용합니다: 사용자 및 연애 상대방의 특성과 상황에 맞춘
                맞춤형 연애 코칭 제공 연애 코칭 서비스 품질 향상을 위한 분석 및 연구
                <br />
                <br />
                제4조 (개인정보의 보유 및 이용 기간)
                <br />
                제3자는 제공받은 개인정보를 연애 코칭 서비스 제공 및 목적 달성을 위해 필요한 기간 동안 보유하며, 법령에
                따라 일정 기간 보관할 수 있습니다. 해당 기간이 경과한 후에는 개인정보를 지체 없이 파기합니다.
                <br />
                <br />
                제5조 (제3자 제공에 대한 동의 철회)
                <br />
                사용자는 언제든지 개인정보 제3자 제공에 대한 동의를 철회할 수 있습니다. 동의
                철회는 jjneurons@naver.com을 통해 요청할 수 있으며, 동의 철회 시 서비스 이용에 제한이 있을 수 있습니다.
                제6조 (개인정보 보호) 회사와 제3자는 사용자의 개인정보를 안전하게 보호하기 위해 적절한 보안 조치를
                시행합니다. 제공된 개인정보는 본 동의서에 명시된 목적 외의 다른 용도로 사용되지 않으며, 제3자는 개인정보
                보호법을 준수하여 정보를 처리합니다.
            </Text>
        </Box>
    );
}
