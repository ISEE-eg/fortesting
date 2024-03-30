import { Box, Container, Flex } from "@chakra-ui/react";
import SectionTitle from "../common/SectionTitle";
import { useTranslations } from "next-intl";
import AchievementCard from "./AchievementCard";

export default function AchievementsSection() {
  const t = useTranslations('home.achievementsSection');

  const achievements = [
    {
      title: "إجمالي المساحة",
      stats: "87,753.85 م"
    },
    {
      title: "إجمالي الإيرادات",
      stats: "120,259,773"
    },
    {
      title: "الوحدات السكنية",
      stats: "198"
    },
    {
      title: "إجمالي المساحة",
      stats: "87,753.85 م"
    }
  ];

  const achievementsCards = achievements.map((achievement, index) => {
    return (
      <Box flexBasis={['48%', '48%', '22%']} key={index} mt={[5, 5, 0]}>
        <AchievementCard  title={achievement.title} stats={achievement.stats} />
      </Box>
    )
  });

  return (
    <Box py={32} bg={'blackSectionBg'}>
      <Container maxW={'mainContainerSize'}>
        <SectionTitle title={t('title')} />
        <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
          {achievementsCards}
        </Flex>
      </Container>
    </Box>
  )
}
