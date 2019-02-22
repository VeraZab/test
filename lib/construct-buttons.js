export const constructButtons = data => {
  let buttons = [];

  if (data.button_one_label) {
    buttons.push({
      label: data.button_one_label,
      link: data.button_one_link,
      style: data.button_one_style,
      download: data.download_attr === 'both' || data.download_attr === 'button-one',
    });
  }

  if (data.button_two_label) {
    buttons.push({
      label: data.button_two_label,
      link: data.button_two_link,
      style: data.button_two_style,
      download: data.download_attr === 'both' || data.download_attr === 'button-two',
    });
  }

  return buttons;
};
