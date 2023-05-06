import React, { useState } from 'react';
import classes from './About.module.css';
import Card from '../Layout/Card';

const About = () => {
  const [inProp, setInProp] = useState(true);

  return (
    <div>
            <h2>About Placeholder</h2>
            <Card>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit enim in velit tincidunt feugiat. Vestibulum vestibulum interdum ultricies. Sed sit amet commodo lectus, sed rhoncus dolor. Cras pulvinar, tellus at dictum tincidunt, tellus tellus ultricies mi, vitae ornare leo tortor ut lacus. Praesent laoreet augue eget dolor fringilla hendrerit. Praesent nec justo id lorem malesuada commodo et vitae arcu. Curabitur pellentesque magna eu lorem venenatis, in faucibus purus aliquet. In nisi massa, tristique nec sem eu, tempus pulvinar lorem. Proin nec justo volutpat augue ultricies venenatis ut non nunc. Fusce sit amet orci vel libero vestibulum aliquet. Sed tortor sem, porttitor vel velit a, tincidunt finibus libero. Nullam placerat eget tellus quis blandit. Maecenas sit amet congue ex. Fusce laoreet justo ac massa rhoncus suscipit. Vivamus in lacus venenatis, finibus ipsum sed, posuere magna. Etiam laoreet orci sit amet justo interdum, accumsan tincidunt odio commodo.</p>
            </Card>

    </div>
  );
};

export default About;

