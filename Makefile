build:
	@npm install
	@./node_modules/.bin/bower install --allow-root --config.interactive=false
	@./node_modules/.bin/gulp notests

clean:
	@rm -rf node_modules bower_components public .tmp

release:
	@make clean
	@make build

.PHONY: build clean release