import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import Cards from './index'

const images = [{
    'caption': '📽 from @johanandhiscats\n😻😻😻😻😻 ~ double tap ❤❤\n🐱🐱Shop for Cat Lovers 👉 @happypetclub bio\n\n#catloversclub',
    'code': 'BWFQAVUluEF',
    'comments': 554,
    'id': '1550716038337192197',
    'isSidecar': false,
    'isVideo': true,
    'likes': 30809,
    'numComments': 554,
    'numLikes': 30809,
    'owner': {'counts': {}, 'id': '1640567468'},
    'relatedMedia': [],
    'postedAt': 1499079778,
    'sidecarChildren': [],
    'src': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19623708_329795934109791_2576934674853003264_n.jpg',
    'thumbnailResources': [],
    'thumbnailSrc': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19623708_329795934109791_2576934674853003264_n.jpg',
    'videoViews': 98996,
    'dimensions': {'height': 640, 'width': 640}
}, {
    'caption': 'Cuteness overload 😻💞 From: @cattery_greycat\n\n#cats_of_world and follow us to be featured 🐾',
    'code': 'BWFBACDlrLU',
    'comments': 246,
    'id': '1550650046953206484',
    'isSidecar': false,
    'isVideo': true,
    'likes': 20972,
    'numComments': 246,
    'numLikes': 20972,
    'owner': {'counts': {}, 'id': '1503969235'},
    'relatedMedia': [],
    'postedAt': 1499071912,
    'sidecarChildren': [],
    'src': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19622729_843476545805036_4958239112701149184_n.jpg',
    'thumbnailResources': [],
    'thumbnailSrc': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/c140.0.360.360/19622729_843476545805036_4958239112701149184_n.jpg',
    'videoViews': 62464,
    'dimensions': {'height': 360, 'width': 640}
}, {
    'caption': '📸 from @nataliyasavannahscat 😺💛\nFollow @my.adorable.cats for awesome cats\n💛 💛 💛 \n#goodmorning #bomdia #breakfast #morning #coffee #love #happy #buongiorno #selfie #buenosdias #smile #sunrise #bonjour #instagood #gunaydin  #wakeup #goodday #work #beautiful #picoftheday #gutenmorgen #доброеутро #sunshine #riseandshine #haveaniceday #motivation #instadaily #newday',
    'code': 'BWE9-hnl_OP',
    'comments': 56,
    'id': '1550636749264778127',
    'isSidecar': false,
    'isVideo': false,
    'likes': 10265,
    'numComments': 56,
    'numLikes': 10265,
    'owner': {'counts': {}, 'id': '3130262657'},
    'relatedMedia': [],
    'postedAt': 1499070326,
    'sidecarChildren': [],
    'src': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e35/19623555_1882305995352196_4277836771695263744_n.jpg',
    'thumbnailResources': [],
    'thumbnailSrc': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.29.1080.1080/19623555_1882305995352196_4277836771695263744_n.jpg',
    'dimensions': {'height': 1138, 'width': 1080}
}, {
    'caption': 'yakk si empus kecil mulai menyerang, hooman tidak melakukan perlawanan dan di empus semakin gencar hiaaaatt si empus ga ada lelahnya ngejar hooman 😅😅😅\n.\n.\n📽 from @studio_allive\n👍 Like dan tag teman kamu yang suka kucing\n.\n.\n🐱 #kucingmalas #kucingmanja #manja #kucingcomel #kucinglucu #meong #cat #cats #catsagram #catstagram #kitten #kitty #kittens #pet  #animal #animals #petstagram #petsagram #catsofinstagram #ilovemycat #instagramcats #catoftheday #lovecats #furry #kucing #lovekittens #adorable #catlover #instacat',
    'code': 'BWE9dFkBRRm',
    'comments': 53,
    'id': '1550634451397317734',
    'isSidecar': false,
    'isVideo': true,
    'likes': 2235,
    'numComments': 53,
    'numLikes': 2235,
    'owner': {'counts': {}, 'id': '4491142596'},
    'relatedMedia': [],
    'postedAt': 1499070053,
    'sidecarChildren': [],
    'src': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19535489_1004146553060752_517276227518595072_n.jpg',
    'thumbnailResources': [],
    'thumbnailSrc': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19535489_1004146553060752_517276227518595072_n.jpg',
    'videoViews': 7618,
    'dimensions': {'height': 640, 'width': 640}
}, {
    'caption': 'From: @bengalcat_bear\n\n#catsofday and follow us to be featured 😻',
    'code': 'BWEmczlFrX3',
    'comments': 50,
    'id': '1550533277018142199',
    'isSidecar': false,
    'isVideo': false,
    'likes': 17136,
    'numComments': 50,
    'numLikes': 17136,
    'owner': {'counts': {}, 'id': '4037647610'},
    'relatedMedia': [],
    'postedAt': 1499057992,
    'sidecarChildren': [],
    'src': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e35/19624445_1891894477801448_8639216940834881536_n.jpg',
    'thumbnailResources': [],
    'thumbnailSrc': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19624445_1891894477801448_8639216940834881536_n.jpg',
    'dimensions': {'height': 1080, 'width': 1080}
}, {
    'caption': '☺☺☺\n📷 from @sunrise_aby_cattery\n#sweetcatclub',
    'code': 'BWEl2J_nv9T',
    'comments': 52,
    'id': '1550530621026008915',
    'isSidecar': false,
    'isVideo': false,
    'likes': 18098,
    'numComments': 52,
    'numLikes': 18098,
    'owner': {'counts': {}, 'id': '3853358310'},
    'relatedMedia': [],
    'postedAt': 1499057675,
    'sidecarChildren': [],
    'src': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e35/19623586_1894051880856890_2183443077002166272_n.jpg',
    'thumbnailResources': [],
    'thumbnailSrc': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19623586_1894051880856890_2183443077002166272_n.jpg',
    'dimensions': {'height': 1080, 'width': 1080}
}, {
    'caption': 'From @rody.tino.tomoko: “family😻❣️” #catsofinstagram',
    'code': 'BWEYfawA5ME',
    'comments': 620,
    'id': '1550471883865166596',
    'isSidecar': false,
    'isVideo': true,
    'likes': 112108,
    'numComments': 620,
    'numLikes': 112108,
    'owner': {'counts': {}, 'id': '7013409'},
    'relatedMedia': [],
    'postedAt': 1499050673,
    'sidecarChildren': [],
    'src': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19624269_1383242275056645_1914064136946319360_n.jpg',
    'thumbnailResources': [],
    'thumbnailSrc': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/c134.0.344.344/19624269_1383242275056645_1914064136946319360_n.jpg',
    'videoViews': 333034,
    'dimensions': {'height': 344, 'width': 612}
}, {
    'caption': 'Lovely 💞 Tag a friend 🐾\nBy @cattery_greycat',
    'code': 'BWD9BJ0FZ6O',
    'comments': 87,
    'id': '1550351056839745166',
    'isSidecar': false,
    'isVideo': true,
    'likes': 5873,
    'numComments': 87,
    'numLikes': 5873,
    'owner': {'counts': {}, 'id': '3605331686'},
    'relatedMedia': [],
    'postedAt': 1499036269,
    'sidecarChildren': [],
    'src': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19623101_1880344285622834_8265879429775884288_n.jpg',
    'thumbnailResources': [],
    'thumbnailSrc': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19623101_1880344285622834_8265879429775884288_n.jpg',
    'videoViews': 30383,
    'dimensions': {'height': 640, 'width': 640}
}, {
    'caption': '📷 from @muller_73\n😙😙😙😙😙 ~ double tap ❤❤\nFollow @happycatclub and tag #happycatclub for your chance to be featured.\n😻😻 Shop for Cat Lovers 👉 @happypetclub bio',
    'code': 'BWFQO2llibK',
    'comments': 98,
    'id': '1550717036128511690',
    'isSidecar': false,
    'isVideo': true,
    'likes': 11545,
    'numComments': 98,
    'numLikes': 11545,
    'owner': {'counts': {}, 'id': '4239506493'},
    'relatedMedia': [],
    'postedAt': 1499079897,
    'sidecarChildren': [],
    'src': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19762058_259878431157821_719818260903624704_n.jpg',
    'thumbnailResources': [],
    'thumbnailSrc': 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e15/19762058_259878431157821_719818260903624704_n.jpg',
    'videoViews': 51259,
    'dimensions': {'height': 640, 'width': 640}
}];

class Wrapper extends Component {
    state = {
        images
    };

    onRemove = (img) => {
        this.setState(({images}) => {
            return {
                images: images.filter(el => el != img)
            }
        })
    };

    render() {
        const {images} = this.state;
        const {onRemove} = this;
        return (
            <Cards
                images={images}
                onRemove={onRemove}
            />
        )
    }
}

storiesOf('Cards', module)
    .add('default render', () => <Wrapper />);
