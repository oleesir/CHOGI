'use client';

import Image from 'next/image';
import AnimateLayout from '@/app/AnimateLayout';

const AboutUs = () => {
  return (
    <AnimateLayout>
      <div className='relative w-full  flex items-center  h-[500px] overflow-hidden'>
        <div className='absolute w-full h-full top-0 bg-black'>
          <Image
            src='/praise.jpg'
            alt='Picture of the author'
            style={{ height: '100%', opacity: '50%' }}
            fill={true}
            objectFit='fill'
          />
        </div>
      </div>
      <div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum lectus
          condimentum, fringilla enim cursus, pharetra sem. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Suspendisse diam neque, euismod vitae diam
          sed, vulputate dapibus diam. Praesent sed tellus sollicitudin, vehicula ipsum et,
          facilisis massa. Vivamus accumsan massa in velit sollicitudin aliquet. Etiam volutpat,
          diam varius vestibulum porttitor, sapien nunc ullamcorper magna, a convallis purus urna
          varius velit. Ut sit amet ante erat. Cras ornare erat at justo porttitor fringilla. In
          vestibulum, arcu dapibus viverra laoreet, massa massa tincidunt est, eu mattis quam eros
          nec nunc. Suspendisse potenti. Sed at vestibulum nisi, non facilisis mi. Fusce egestas
          mattis massa, vitae gravida felis aliquet sit amet. Nullam dolor quam, volutpat non
          consequat sed, eleifend et dolor. Sed rutrum euismod mi vitae volutpat. Quisque lacus
          arcu, convallis a est fermentum, convallis pretium nulla. Praesent sit amet eleifend
          ipsum. Donec accumsan mi et finibus semper. Ut non tempus neque. Praesent aliquam elit
          ornare, suscipit magna ac, mollis orci. Quisque imperdiet, magna quis fermentum viverra,
          justo magna placerat justo, eget dictum enim lacus ac ligula. Ut a sem maximus quam
          feugiat aliquam. Suspendisse potenti. Pellentesque aliquet est at arcu mattis rutrum.
          Integer vulputate turpis pharetra fringilla sagittis. Donec venenatis vel nibh vitae
          pretium. Maecenas convallis blandit blandit. Maecenas consectetur eu ipsum vel rutrum.
          Praesent euismod mi eget mauris viverra tincidunt. Praesent non suscipit augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dapibus nunc auctor
          auctor. Cras nec ultricies nunc, et sodales lectus. Praesent sit amet felis a nisl posuere
          fermentum sed vel nunc. Nam tristique lorem leo, vitae tempus neque suscipit a. Quisque
          sollicitudin, elit ac dignissim varius, felis diam viverra sapien, id vulputate ex quam et
          nibh. Nunc tempus ipsum in efficitur vestibulum. Donec porta dolor in nibh placerat
          pretium. Suspendisse eget ante luctus, luctus elit sed, ultrices nunc. Nulla fringilla
          erat sit amet mi dictum, sit amet viverra neque placerat. Suspendisse feugiat dui sit amet
          convallis porta. Phasellus pretium luctus augue. In vulputate nulla mollis elementum
          vehicula. Fusce semper tortor quis nibh dictum commodo. Curabitur molestie scelerisque
          lacus id pulvinar. Aliquam lacinia tellus vel dolor interdum tempor. Maecenas porttitor
          dolor odio, ut interdum tortor gravida et. Sed id tempor ante. In id congue velit. Nunc in
          augue ac sem viverra ultrices vitae nec elit. Ut tincidunt, dui ac hendrerit ultricies,
          lorem lorem interdum metus, ut lacinia dolor felis vitae ipsum. Aenean molestie ut massa
          at pretium. Curabitur vulputate magna quam, nec finibus nulla dictum a. Morbi sed sem in
          est feugiat fermentum quis et ante. Morbi mattis elit eget imperdiet euismod. Phasellus ut
          elit lobortis, porttitor sem ut, gravida purus. Morbi hendrerit urna quis quam fringilla
          scelerisque. Curabitur ac nunc odio. Vestibulum eget eleifend nisl.{' '}
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum lectus
          condimentum, fringilla enim cursus, pharetra sem. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Suspendisse diam neque, euismod vitae diam
          sed, vulputate dapibus diam. Praesent sed tellus sollicitudin, vehicula ipsum et,
          facilisis massa. Vivamus accumsan massa in velit sollicitudin aliquet. Etiam volutpat,
          diam varius vestibulum porttitor, sapien nunc ullamcorper magna, a convallis purus urna
          varius velit. Ut sit amet ante erat. Cras ornare erat at justo porttitor fringilla. In
          vestibulum, arcu dapibus viverra laoreet, massa massa tincidunt est, eu mattis quam eros
          nec nunc. Suspendisse potenti. Sed at vestibulum nisi, non facilisis mi. Fusce egestas
          mattis massa, vitae gravida felis aliquet sit amet. Nullam dolor quam, volutpat non
          consequat sed, eleifend et dolor. Sed rutrum euismod mi vitae volutpat. Quisque lacus
          arcu, convallis a est fermentum, convallis pretium nulla. Praesent sit amet eleifend
          ipsum. Donec accumsan mi et finibus semper. Ut non tempus neque. Praesent aliquam elit
          ornare, suscipit magna ac, mollis orci. Quisque imperdiet, magna quis fermentum viverra,
          justo magna placerat justo, eget dictum enim lacus ac ligula. Ut a sem maximus quam
          feugiat aliquam. Suspendisse potenti. Pellentesque aliquet est at arcu mattis rutrum.
          Integer vulputate turpis pharetra fringilla sagittis. Donec venenatis vel nibh vitae
          pretium. Maecenas convallis blandit blandit. Maecenas consectetur eu ipsum vel rutrum.
          Praesent euismod mi eget mauris viverra tincidunt. Praesent non suscipit augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dapibus nunc auctor
          auctor. Cras nec ultricies nunc, et sodales lectus. Praesent sit amet felis a nisl posuere
          fermentum sed vel nunc. Nam tristique lorem leo, vitae tempus neque suscipit a. Quisque
          sollicitudin, elit ac dignissim varius, felis diam viverra sapien, id vulputate ex quam et
          nibh. Nunc tempus ipsum in efficitur vestibulum. Donec porta dolor in nibh placerat
          pretium. Suspendisse eget ante luctus, luctus elit sed, ultrices nunc. Nulla fringilla
          erat sit amet mi dictum, sit amet viverra neque placerat. Suspendisse feugiat dui sit amet
          convallis porta. Phasellus pretium luctus augue. In vulputate nulla mollis elementum
          vehicula. Fusce semper tortor quis nibh dictum commodo. Curabitur molestie scelerisque
          lacus id pulvinar. Aliquam lacinia tellus vel dolor interdum tempor. Maecenas porttitor
          dolor odio, ut interdum tortor gravida et. Sed id tempor ante. In id congue velit. Nunc in
          augue ac sem viverra ultrices vitae nec elit. Ut tincidunt, dui ac hendrerit ultricies,
          lorem lorem interdum metus, ut lacinia dolor felis vitae ipsum. Aenean molestie ut massa
          at pretium. Curabitur vulputate magna quam, nec finibus nulla dictum a. Morbi sed sem in
          est feugiat fermentum quis et ante. Morbi mattis elit eget imperdiet euismod. Phasellus ut
          elit lobortis, porttitor sem ut, gravida purus. Morbi hendrerit urna quis quam fringilla
          scelerisque. Curabitur ac nunc odio. Vestibulum eget eleifend nisl.{' '}
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum lectus
          condimentum, fringilla enim cursus, pharetra sem. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Suspendisse diam neque, euismod vitae diam
          sed, vulputate dapibus diam. Praesent sed tellus sollicitudin, vehicula ipsum et,
          facilisis massa. Vivamus accumsan massa in velit sollicitudin aliquet. Etiam volutpat,
          diam varius vestibulum porttitor, sapien nunc ullamcorper magna, a convallis purus urna
          varius velit. Ut sit amet ante erat. Cras ornare erat at justo porttitor fringilla. In
          vestibulum, arcu dapibus viverra laoreet, massa massa tincidunt est, eu mattis quam eros
          nec nunc. Suspendisse potenti. Sed at vestibulum nisi, non facilisis mi. Fusce egestas
          mattis massa, vitae gravida felis aliquet sit amet. Nullam dolor quam, volutpat non
          consequat sed, eleifend et dolor. Sed rutrum euismod mi vitae volutpat. Quisque lacus
          arcu, convallis a est fermentum, convallis pretium nulla. Praesent sit amet eleifend
          ipsum. Donec accumsan mi et finibus semper. Ut non tempus neque. Praesent aliquam elit
          ornare, suscipit magna ac, mollis orci. Quisque imperdiet, magna quis fermentum viverra,
          justo magna placerat justo, eget dictum enim lacus ac ligula. Ut a sem maximus quam
          feugiat aliquam. Suspendisse potenti. Pellentesque aliquet est at arcu mattis rutrum.
          Integer vulputate turpis pharetra fringilla sagittis. Donec venenatis vel nibh vitae
          pretium. Maecenas convallis blandit blandit. Maecenas consectetur eu ipsum vel rutrum.
          Praesent euismod mi eget mauris viverra tincidunt. Praesent non suscipit augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dapibus nunc auctor
          auctor. Cras nec ultricies nunc, et sodales lectus. Praesent sit amet felis a nisl posuere
          fermentum sed vel nunc. Nam tristique lorem leo, vitae tempus neque suscipit a. Quisque
          sollicitudin, elit ac dignissim varius, felis diam viverra sapien, id vulputate ex quam et
          nibh. Nunc tempus ipsum in efficitur vestibulum. Donec porta dolor in nibh placerat
          pretium. Suspendisse eget ante luctus, luctus elit sed, ultrices nunc. Nulla fringilla
          erat sit amet mi dictum, sit amet viverra neque placerat. Suspendisse feugiat dui sit amet
          convallis porta. Phasellus pretium luctus augue. In vulputate nulla mollis elementum
          vehicula. Fusce semper tortor quis nibh dictum commodo. Curabitur molestie scelerisque
          lacus id pulvinar. Aliquam lacinia tellus vel dolor interdum tempor. Maecenas porttitor
          dolor odio, ut interdum tortor gravida et. Sed id tempor ante. In id congue velit. Nunc in
          augue ac sem viverra ultrices vitae nec elit. Ut tincidunt, dui ac hendrerit ultricies,
          lorem lorem interdum metus, ut lacinia dolor felis vitae ipsum. Aenean molestie ut massa
          at pretium. Curabitur vulputate magna quam, nec finibus nulla dictum a. Morbi sed sem in
          est feugiat fermentum quis et ante. Morbi mattis elit eget imperdiet euismod. Phasellus ut
          elit lobortis, porttitor sem ut, gravida purus. Morbi hendrerit urna quis quam fringilla
          scelerisque. Curabitur ac nunc odio. Vestibulum eget eleifend nisl.{' '}
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum lectus
          condimentum, fringilla enim cursus, pharetra sem. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Suspendisse diam neque, euismod vitae diam
          sed, vulputate dapibus diam. Praesent sed tellus sollicitudin, vehicula ipsum et,
          facilisis massa. Vivamus accumsan massa in velit sollicitudin aliquet. Etiam volutpat,
          diam varius vestibulum porttitor, sapien nunc ullamcorper magna, a convallis purus urna
          varius velit. Ut sit amet ante erat. Cras ornare erat at justo porttitor fringilla. In
          vestibulum, arcu dapibus viverra laoreet, massa massa tincidunt est, eu mattis quam eros
          nec nunc. Suspendisse potenti. Sed at vestibulum nisi, non facilisis mi. Fusce egestas
          mattis massa, vitae gravida felis aliquet sit amet. Nullam dolor quam, volutpat non
          consequat sed, eleifend et dolor. Sed rutrum euismod mi vitae volutpat. Quisque lacus
          arcu, convallis a est fermentum, convallis pretium nulla. Praesent sit amet eleifend
          ipsum. Donec accumsan mi et finibus semper. Ut non tempus neque. Praesent aliquam elit
          ornare, suscipit magna ac, mollis orci. Quisque imperdiet, magna quis fermentum viverra,
          justo magna placerat justo, eget dictum enim lacus ac ligula. Ut a sem maximus quam
          feugiat aliquam. Suspendisse potenti. Pellentesque aliquet est at arcu mattis rutrum.
          Integer vulputate turpis pharetra fringilla sagittis. Donec venenatis vel nibh vitae
          pretium. Maecenas convallis blandit blandit. Maecenas consectetur eu ipsum vel rutrum.
          Praesent euismod mi eget mauris viverra tincidunt. Praesent non suscipit augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dapibus nunc auctor
          auctor. Cras nec ultricies nunc, et sodales lectus. Praesent sit amet felis a nisl posuere
          fermentum sed vel nunc. Nam tristique lorem leo, vitae tempus neque suscipit a. Quisque
          sollicitudin, elit ac dignissim varius, felis diam viverra sapien, id vulputate ex quam et
          nibh. Nunc tempus ipsum in efficitur vestibulum. Donec porta dolor in nibh placerat
          pretium. Suspendisse eget ante luctus, luctus elit sed, ultrices nunc. Nulla fringilla
          erat sit amet mi dictum, sit amet viverra neque placerat. Suspendisse feugiat dui sit amet
          convallis porta. Phasellus pretium luctus augue. In vulputate nulla mollis elementum
          vehicula. Fusce semper tortor quis nibh dictum commodo. Curabitur molestie scelerisque
          lacus id pulvinar. Aliquam lacinia tellus vel dolor interdum tempor. Maecenas porttitor
          dolor odio, ut interdum tortor gravida et. Sed id tempor ante. In id congue velit. Nunc in
          augue ac sem viverra ultrices vitae nec elit. Ut tincidunt, dui ac hendrerit ultricies,
          lorem lorem interdum metus, ut lacinia dolor felis vitae ipsum. Aenean molestie ut massa
          at pretium. Curabitur vulputate magna quam, nec finibus nulla dictum a. Morbi sed sem in
          est feugiat fermentum quis et ante. Morbi mattis elit eget imperdiet euismod. Phasellus ut
          elit lobortis, porttitor sem ut, gravida purus. Morbi hendrerit urna quis quam fringilla
          scelerisque. Curabitur ac nunc odio. Vestibulum eget eleifend nisl.{' '}
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum lectus
          condimentum, fringilla enim cursus, pharetra sem. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Suspendisse diam neque, euismod vitae diam
          sed, vulputate dapibus diam. Praesent sed tellus sollicitudin, vehicula ipsum et,
          facilisis massa. Vivamus accumsan massa in velit sollicitudin aliquet. Etiam volutpat,
          diam varius vestibulum porttitor, sapien nunc ullamcorper magna, a convallis purus urna
          varius velit. Ut sit amet ante erat. Cras ornare erat at justo porttitor fringilla. In
          vestibulum, arcu dapibus viverra laoreet, massa massa tincidunt est, eu mattis quam eros
          nec nunc. Suspendisse potenti. Sed at vestibulum nisi, non facilisis mi. Fusce egestas
          mattis massa, vitae gravida felis aliquet sit amet. Nullam dolor quam, volutpat non
          consequat sed, eleifend et dolor. Sed rutrum euismod mi vitae volutpat. Quisque lacus
          arcu, convallis a est fermentum, convallis pretium nulla. Praesent sit amet eleifend
          ipsum. Donec accumsan mi et finibus semper. Ut non tempus neque. Praesent aliquam elit
          ornare, suscipit magna ac, mollis orci. Quisque imperdiet, magna quis fermentum viverra,
          justo magna placerat justo, eget dictum enim lacus ac ligula. Ut a sem maximus quam
          feugiat aliquam. Suspendisse potenti. Pellentesque aliquet est at arcu mattis rutrum.
          Integer vulputate turpis pharetra fringilla sagittis. Donec venenatis vel nibh vitae
          pretium. Maecenas convallis blandit blandit. Maecenas consectetur eu ipsum vel rutrum.
          Praesent euismod mi eget mauris viverra tincidunt. Praesent non suscipit augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dapibus nunc auctor
          auctor. Cras nec ultricies nunc, et sodales lectus. Praesent sit amet felis a nisl posuere
          fermentum sed vel nunc. Nam tristique lorem leo, vitae tempus neque suscipit a. Quisque
          sollicitudin, elit ac dignissim varius, felis diam viverra sapien, id vulputate ex quam et
          nibh. Nunc tempus ipsum in efficitur vestibulum. Donec porta dolor in nibh placerat
          pretium. Suspendisse eget ante luctus, luctus elit sed, ultrices nunc. Nulla fringilla
          erat sit amet mi dictum, sit amet viverra neque placerat. Suspendisse feugiat dui sit amet
          convallis porta. Phasellus pretium luctus augue. In vulputate nulla mollis elementum
          vehicula. Fusce semper tortor quis nibh dictum commodo. Curabitur molestie scelerisque
          lacus id pulvinar. Aliquam lacinia tellus vel dolor interdum tempor. Maecenas porttitor
          dolor odio, ut interdum tortor gravida et. Sed id tempor ante. In id congue velit. Nunc in
          augue ac sem viverra ultrices vitae nec elit. Ut tincidunt, dui ac hendrerit ultricies,
          lorem lorem interdum metus, ut lacinia dolor felis vitae ipsum. Aenean molestie ut massa
          at pretium. Curabitur vulputate magna quam, nec finibus nulla dictum a. Morbi sed sem in
          est feugiat fermentum quis et ante. Morbi mattis elit eget imperdiet euismod. Phasellus ut
          elit lobortis, porttitor sem ut, gravida purus. Morbi hendrerit urna quis quam fringilla
          scelerisque. Curabitur ac nunc odio. Vestibulum eget eleifend nisl.{' '}
        </h1>
      </div>
    </AnimateLayout>
  );
};

export default AboutUs;
