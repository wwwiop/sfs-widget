import { Content, Navigation } from '@/utils/models';
import { DropdownMenu } from './DropdownMenu';
import { DropdownOption } from './DropdownOption';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import amazonprimeBanner from '@/resources/channel-banners/amazonprime.png';
import applemusicBanner from '@/resources/channel-banners/applemusic.svg';
import compactdiscBanner from '@/resources/channel-banners/compactdisc.svg';
import downloadBanner from '@/resources/channel-banners/download.svg';
import spotifyBanner from '@/resources/channel-banners/spotify.svg';
import usbdriveBanner from '@/resources/channel-banners/usbdrive.svg';
import youtubeBanner from '@/resources/channel-banners/youtube.svg';
import { AnalyticsContext } from '@/hooks/useAnalytics';

interface SelectChannelProps {
  data: {
    content: Content;
    navigation: Navigation;
    analytics: AnalyticsContext;
    selectChannel: (channelId: string) => void;
    clickChannelLink: (eventType: string, link: string) => void;
    back: () => void;
  }
};

const banners: Record<string, StaticImport> = {
  'spotify': spotifyBanner,
  'youtube': youtubeBanner,
  'amazonprime': amazonprimeBanner,
  'applemusic': applemusicBanner,
  'download': downloadBanner,
  'compactdisc': compactdiscBanner,
  'usbdrive': usbdriveBanner,
};

export function SelectChannel(props: SelectChannelProps) {
  const { content, navigation, clickChannelLink, selectChannel, back } = props.data;
  const { channels } = content;
  
  const orderCdsLink = 'https://store.songsforsaplings.com/collections/music';
  function orderCds() {
    clickChannelLink('orderCd', orderCdsLink);
  }

  return (
    <DropdownMenu data={{ onScreen: !navigation.channel }}>
      { channels.map(ch => {
        const { channelId, name } = ch;
        const onClick = () => selectChannel(channelId)

        const src = banners[channelId];
        const inner = src ? (
          <Image className='h-10 w-fit' src={src} alt={name} />
        ) : (
          name
        );

        return (
          <DropdownOption key={channelId} data={{ onClick }}>
            <div className='flex justify-center items-center px-4 py-4'>
              {inner}
            </div>
          </DropdownOption>
        )
      }) }
      {/* There is a link card at the bottom to order cds. */}
      <DropdownOption data={{ href: orderCdsLink, onClick: () => orderCds }}>
        <div className='flex justify-center items-center px-4 py-4 text-2xl font-bold uppercase'>
          ORDER CDS
        </div>
      </DropdownOption>
    </DropdownMenu>
  );
}