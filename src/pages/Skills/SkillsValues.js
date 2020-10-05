import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import CustomSlider from './CustomSlider';
import { skillsData } from './skills-data';

const SkillsValues = () => {
    return (
        <Fragment>
            {skillsData.map(skill => (
                <div>
                    <Typography variant="body1">{skill.name}</Typography>
                    <CustomSlider
                        valueLabelDisplay="auto"
                        aria-label="skill slider"
                        defaultValue={skill.value}
                        step={null}
                    />
                </div>
            ))}
        </Fragment>
    )
}

export default SkillsValues;
