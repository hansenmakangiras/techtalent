FROM node:0.12

# Install gem sass for  grunt-contrib-sass
RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby
RUN gem install sass

WORKDIR /home/techtalent

# Install TechTalent.JS Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower

# Install TechTalent.JS packages
ADD package.json /home/techtalent/package.json
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /home/techtalent/.bowerrc
ADD bower.json /home/techtalent/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/techtalent

# Set development environment as default
ENV NODE_ENV development

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729
CMD ["grunt"]
